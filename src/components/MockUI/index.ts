import { lazy } from 'react';
import type { MockSlug } from '../../data/showcases';

const DashboardMock = lazy(() => import('./DashboardMock'));
const PosMock = lazy(() => import('./PosMock'));
const EcommerceMock = lazy(() => import('./EcommerceMock'));
const BookingMock = lazy(() => import('./BookingMock'));
const HrisMock = lazy(() => import('./HrisMock'));
const ProfileMock = lazy(() => import('./ProfileMock'));

export const MOCK_MAP: Record<MockSlug, React.LazyExoticComponent<() => React.JSX.Element>> = {
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
