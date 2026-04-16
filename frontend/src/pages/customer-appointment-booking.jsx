import React, { useState, useEffect } from 'react';
import '../styles.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const APPOINTMENT_TYPES = [
  { value: 'In-Store Consultation', label: 'In-Store Consultation', icon: '💬' },
  { value: 'Custom Order Meeting', label: 'Custom Order Meeting', icon: '✨' },
  { value: 'Jewelry Fitting', label: 'Jewelry Fitting', icon: '💍' },
  { value: 'Repair Drop-off', label: 'Repair Drop-off', icon: '🔧' },
  { value: 'Resize', label: 'Resize Service', icon: '📏' },
  { value: 'Valuation', label: 'Valuation', icon: '💎' },
  { value: 'Gift Consultation', label: 'Gift Consultation', icon: '🎁' }
];

const FIXED_TIME_SLOTS = [
  { display: '7:00 AM - 8:00 AM', start: '07:00', end: '08:00' },
  { display: '8:00 AM - 9:00 AM', start: '08:00', end: '09:00' },
  { display: '9:00 AM - 10:00 AM', start: '09:00', end: '10:00' },
  { display: '10:00 AM - 11:00 AM', start: '10:00', end: '11:00' },
  { display: '11:00 AM - 12:00 PM', start: '11:00', end: '12:00' },
  { display: '12:00 PM - 1:00 PM', start: '12:00', end: '13:00' },
  { display: '1:00 PM - 2:00 PM', start: '13:00', end: '14:00' },
  { display: '2:00 PM - 3:00 PM', start: '14:00', end: '15:00' },
  { display: '3:00 PM - 4:00 PM', start: '15:00', end: '16:00' },
  { display: '4:00 PM - 5:00 PM', start: '16:00', end: '17:00' },
  { display: '5:00 PM - 6:00 PM', start: '17:00', end: '18:00' },
  { display: '6:00 PM - 7:00 PM', start: '18:00', end: '19:00' },
  { display: '7:00 PM - 8:00 PM', start: '19:00', end: '20:00' },
  { display: '8:00 PM - 9:00 PM', start: '20:00', end: '21:00' },
  { display: '9:00 PM - 10:00 PM', start: '21:00', end: '22:00' }
];

export default function CustomerAppointmentBooking() {
  const [step, setStep] = useState(1); // 1: Type selection, 2: Date/Time selection, 3: Confirmation
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [myBookings, setMyBookings] = useState([]);
  const [notes, setNotes] = useState('');

  // Fetch available slots for selected date
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  // Fetch customer's bookings on mount
  useEffect(() => {
    fetchMyBookings();
  }, []);

  const fetchAvailableSlots = async (date) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/appointments/slots?date=${date}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        // Filter available slots and slots that match the requested type
        const available = (data.slots || []).filter(slot => 
          slot.status === 'available' && !slot.isBlocked
        );
        setAvailableSlots(available);
        if (available.length === 0) {
          setError('No available slots for this date. Please select another date.');
        }
      }
    } catch (error) {
      setError('Failed to fetch available slots: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyBookings = async () => {
    try {
      const response = await fetch(`${API_URL}/appointments/my-bookings`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setMyBookings(Array.isArray(data.bookings) ? data.bookings : []);
      }
    } catch (error) {
      console.log('Could not fetch bookings:', error.message);
    }
  };

  const handleBookAppointment = async () => {
    if (!selectedType || !selectedDate || !selectedTimeSlot) {
      setError('Please complete all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/appointments/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          slotId: selectedTimeSlot._id,
          type: selectedType,
          notes: notes,
          date: selectedDate,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Failed to book appointment');
        return;
      }

      setSuccess('Appointment booked successfully! Check your email for confirmation.');
      setTimeout(() => {
        resetForm();
        fetchMyBookings();
        setStep(1);
        setSuccess('');
      }, 2000);
    } catch (error) {
      setError('Error booking appointment: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedType(null);
    setSelectedDate('');
    setSelectedTimeSlot(null);
    setNotes('');
    setAvailableSlots([]);
    setError('');
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30); // Allow booking 30 days in advance
    return maxDate.toISOString().split('T')[0];
  };

  const cancelBooking = async (bookingId) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return;

    try {
      const response = await fetch(`${API_URL}/appointments/${bookingId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        setSuccess('Appointment cancelled successfully');
        fetchMyBookings();
        setTimeout(() => setSuccess(''), 2000);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to cancel appointment');
      }
    } catch (error) {
      setError('Error cancelling appointment: ' + error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>📅 Book an Appointment</h1>
        <p>Select your preferred service and time</p>
      </div>

      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="dashboard-content">
        {/* Step 1: Select Appointment Type */}
        {step === 1 && (
          <div className="card">
            <h2>Step 1: What service do you need?</h2>
            <div className="appointment-type-grid">
              {APPOINTMENT_TYPES.map(type => (
                <button
                  key={type.value}
                  className={`type-card ${selectedType === type.value ? 'selected' : ''}`}
                  onClick={() => setSelectedType(type.value)}
                >
                  <div className="type-icon">{type.icon}</div>
                  <div className="type-label">{type.label}</div>
                </button>
              ))}
            </div>

            {selectedType && (
              <div className="form-actions">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => setStep(2)}
                >
                  Continue to Date & Time
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Select Date and Time */}
        {step === 2 && (
          <div className="card">
            <h2>Step 2: Choose Date & Time</h2>
            <p className="step-subtitle">
              Selected Service: <strong>{APPOINTMENT_TYPES.find(t => t.value === selectedType)?.label}</strong>
            </p>

            <div className="form-row">
              <div className="form-group">
                <label>Select Date *</label>
                <input
                  type="date"
                  min={getMinDate()}
                  max={getMaxDate()}
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setSelectedTimeSlot(null);
                    setError('');
                  }}
                />
                <small>Available from tomorrow up to 30 days ahead</small>
              </div>
            </div>

            {selectedDate && availableSlots.length > 0 && (
              <div className="form-group">
                <label>Available Time Slots</label>
                <div className="time-slots-grid">
                  {availableSlots.map(slot => (
                    <button
                      key={slot._id}
                      className={`time-slot ${selectedTimeSlot?._id === slot._id ? 'selected' : ''}`}
                      onClick={() => setSelectedTimeSlot(slot)}
                    >
                      {slot.startTime} - {slot.endTime}
                      <div className="slot-capacity">
                        Capacity: {slot.capacity}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedDate && availableSlots.length === 0 && (
              <div className="alert alert-warning">
                No available slots for this date. Please select another date.
              </div>
            )}

            <div className="form-group">
              <label>Additional Notes (Optional)</label>
              <textarea
                placeholder="Tell us about your appointment needs or preferences..."
                rows="3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setStep(1);
                  setSelectedDate('');
                  setSelectedTimeSlot(null);
                }}
              >
                Back
              </button>
              {selectedTimeSlot && (
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => setStep(3)}
                >
                  Review & Confirm
                </button>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="card">
            <h2>Step 3: Confirm Your Appointment</h2>
            <div className="confirmation-details">
              <div className="detail-row">
                <span className="label">Service Type:</span>
                <span className="value">{APPOINTMENT_TYPES.find(t => t.value === selectedType)?.label}</span>
              </div>
              <div className="detail-row">
                <span className="label">Date:</span>
                <span className="value">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="detail-row">
                <span className="label">Time:</span>
                <span className="value">{selectedTimeSlot?.startTime} - {selectedTimeSlot?.endTime}</span>
              </div>
              {notes && (
                <div className="detail-row">
                  <span className="label">Notes:</span>
                  <span className="value">{notes}</span>
                </div>
              )}
            </div>

            <div className="confirmation-message">
              ✅ You will receive a confirmation email with appointment details.
            </div>

            <div className="form-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button 
                className="btn btn-primary btn-lg btn-success"
                onClick={handleBookAppointment}
                disabled={loading}
              >
                {loading ? 'Booking...' : 'Confirm Appointment'}
              </button>
            </div>
          </div>
        )}

        {/* My Appointments */}
        {myBookings.length > 0 && (
          <div className="card">
            <h3>My Upcoming Appointments</h3>
            <div className="appointments-list">
              {myBookings.map(booking => (
                  <div className="appointment-item">
                    <div className="appointment-info">
                      <div className="appointment-type">{booking.appointmentType || booking.type}</div>
                      <div className="appointment-datetime">
                        📅 {new Date(booking.date).toLocaleDateString()} at {booking.startTime} - {booking.endTime}
                      </div>
                      <div className="appointment-status">
                        Status: <span className={`badge badge-${booking.status}`}>{booking.status}</span>
                      </div>
                    </div>
                    {booking.status !== 'completed' && booking.status !== 'cancelled' && (
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => cancelBooking(booking._id)}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
              ))}
            </div>
          </div>
        )}

        {myBookings.length === 0 && step === 1 && (
          <div className="card card-secondary">
            <p>No upcoming appointments. Book one now!</p>
          </div>
        )}
      </div>

      <style>{`
        .appointment-type-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin: 20px 0;
        }

        .type-card {
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .type-card:hover {
          border-color: #d4af37;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(212, 175, 55, 0.2);
        }

        .type-card.selected {
          background: #f4e9d8;
          border-color: #d4af37;
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }

        .type-icon {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .type-label {
          font-weight: 500;
          color: #333;
        }

        .step-subtitle {
          color: #666;
          margin-bottom: 20px;
        }

        .time-slots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 10px;
          margin: 15px 0;
        }

        .time-slot {
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          padding: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          font-size: 13px;
          font-weight: 500;
        }

        .time-slot:hover {
          border-color: #d4af37;
          background: #f9f7f2;
        }

        .time-slot.selected {
          background: #d4af37;
          border-color: #d4af37;
          color: white;
          box-shadow: 0 4px 8px rgba(212, 175, 55, 0.3);
        }

        .slot-capacity {
          font-size: 11px;
          opacity: 0.7;
          margin-top: 5px;
        }

        .confirmation-details {
          background: #f9f7f2;
          border-left: 4px solid #d4af37;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #e0e0e0;
        }

        .detail-row:last-child {
          border-bottom: none;
        }

        .detail-row .label {
          font-weight: 600;
          color: #333;
          min-width: 120px;
        }

        .detail-row .value {
          color: #666;
          text-align: right;
        }

        .confirmation-message {
          background: #e8f5e9;
          border: 1px solid #4caf50;
          color: #2e7d32;
          padding: 15px;
          border-radius: 8px;
          margin: 20px 0;
          text-align: center;
        }

        .form-actions {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
          margin-top: 30px;
        }

        .btn-lg {
          padding: 12px 30px;
          font-size: 16px;
        }

        .btn-success {
          background: #4caf50;
        }

        .btn-success:hover {
          background: #45a049;
        }

        .appointments-list {
          margin-top: 15px;
        }

        .appointment-item {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .appointment-type {
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }

        .appointment-datetime {
          color: #666;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .appointment-status {
          font-size: 13px;
          color: #666;
        }

        .card-secondary {
          background: #f9f7f2;
          text-align: center;
          color: #666;
        }
      `}</style>
    </div>
  );
}
