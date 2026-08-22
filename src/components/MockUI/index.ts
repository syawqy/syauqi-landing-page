import type { MockSlug } from '../../data/showcases';
import DashboardMock from './DashboardMock';
import PosMock from './PosMock';
import EcommerceMock from './EcommerceMock';
import BookingMock from './BookingMock';
import HrisMock from './HrisMock';
import ProfileMock from './ProfileMock';

export const MOCK_MAP: Record<MockSlug, () => React.JSX.Element> = {
  dashboard: DashboardMock,
  pos: PosMock,
  ecommerce: EcommerceMock,
  booking: BookingMock,
  hris: HrisMock,
  profile: ProfileMock,
};

export function isMockSlug(s: string): s is MockSlug {
  return s in MOCK_MAP;
}
