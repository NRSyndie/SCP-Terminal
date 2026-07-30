interface AlertBannerProps {
  message: string;
}

function AlertBanner({ message }: AlertBannerProps) {
  return (
    <div className="alert-banner">
      <span className="alert-banner-text">{message}</span>
    </div>
  );
}

export default AlertBanner;