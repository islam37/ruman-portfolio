export default function QR({
  size = 120,        // default size
  className = "",    // allow custom styling
}) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src="https://i.ibb.co.com/twXXnWkc/https-md-ruman-ahmed-netlify-app.png"
        alt="QR Code"
        className="w-full h-full object-contain"
      />
    </div>
  );
}