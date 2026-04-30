/**
 * BackgroundGlows Component
 * Decorative background gradient elements for ServiceDetails pages
 */
export const BackgroundGlows = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ff6b00]/20 blur-[140px] rounded-full"></div>
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-[#ff6b00]/15 blur-[120px] rounded-full"></div>
    </div>
  );
};
