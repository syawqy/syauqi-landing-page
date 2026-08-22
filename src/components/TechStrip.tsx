import { techChips } from '../data/content';

export default function TechStrip() {
  return (
    <div className="techstrip">
      <p className="label">Teknologi yang dikuasai</p>
      <div className="chips container">
        {techChips.map(t => <span key={t} className="chip">{t}</span>)}
      </div>
    </div>
  );
}
