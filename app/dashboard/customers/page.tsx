import { Metadata } from 'next';
import Image from 'next/image';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (<div>
    <p>Customers Page</p>

    <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
    </div>);
}