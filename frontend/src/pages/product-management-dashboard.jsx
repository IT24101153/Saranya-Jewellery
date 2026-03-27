import { useEffect, useRef } from 'react';
import pageDef from '../legacy-pages/product-management-dashboard.js';

export default function ProductManagementDashboardPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    document.title = pageDef.title || 'Saranya Jewellery';
    container.innerHTML = pageDef.html;

    const scriptElements = [];
    for (const scriptDef of pageDef.scripts || []) {
      const scriptEl = document.createElement('script');
      if (scriptDef.type) scriptEl.type = scriptDef.type;
      scriptEl.textContent = scriptDef.content;
      container.appendChild(scriptEl);
      scriptElements.push(scriptEl);
    }

    return () => {
      scriptElements.forEach((scriptEl) => scriptEl.remove());
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} />;
}
