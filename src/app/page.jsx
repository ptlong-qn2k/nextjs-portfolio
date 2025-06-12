import { redirect } from 'next/navigation';

export default function Home() {
    redirect('/en'); // hoặc redirect('/vi') nếu muốn mặc định tiếng Việt
}
