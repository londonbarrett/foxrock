'use client';
import { Panel } from '../components/panel';
import { Dashboard } from './ui';

export default function Index() {
  return (
    <main>
      <Dashboard>
        <Panel />
      </Dashboard>
      ;
    </main>
  );
}
