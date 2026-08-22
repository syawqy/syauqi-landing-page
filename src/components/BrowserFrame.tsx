interface Props {
  url: string;
  children: React.ReactNode;
}

/** Chrome browser palsu: 3 dot + address bar (identik dengan versi HTML). */
export default function BrowserFrame({ url, children }: Props) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="url">{url}</span>
      </div>
      {children}
    </div>
  );
}
