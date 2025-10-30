'use client';
import TaskManajer from '@/components/Pages/TaskManajer/TaskManajer';

export default function Home() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-8 rounded-lg shadow w-[90%]">
      <TaskManajer />
    </div>
  );
}
