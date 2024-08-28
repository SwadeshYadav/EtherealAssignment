'use client'; 

import { useRouter } from 'next/navigation'; 
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => { 
  const { pathname } = useRouter();

  return (  
    <div className="w-16 bg-zinc-800 text-white flex flex-col h-screen sticky top-0 items-center">
      <div className="flex-grow flex flex-col justify-center items-center">
        <ul className="space-y-1">  
          <li className={`flex items-center md:p-3 p-2 cursor-pointer ${pathname === '/' ? 'bg-zinc-900' : 'hover:bg-zinc-900'}`}>
            <Link href="/" className="flex items-center justify-center w-full text-white">
              <HomeIcon className="text-[22px] text-gray-400" />
            </Link>
          </li> 
          <li className={`flex items-center md:p-3 p-2 cursor-pointer ${pathname === '/chat' ? 'bg-zinc-900' : 'hover:bg-zinc-900'}`}>
            <Link href="/chat" className="flex items-center justify-center w-full text-white">
              <ChatIcon className="text-[20px] text-gray-400" />
            </Link> 
          </li>
          <li className={`flex items-center md:p-3 p-2 cursor-pointer ${pathname === '/sent' ? 'bg-zinc-900' : 'hover:bg-zinc-900'}`}>
            <Link href="/sent" className="flex items-center justify-center w-full text-white">
              <SendIcon className="text-[20px] text-gray-400" />
            </Link>
          </li>
          <li className={`flex items-center md:p-3 p-2 cursor-pointer ${pathname === '/draft' ? 'bg-zinc-900' : 'hover:bg-zinc-900'}`}>
            <Link href="/draft" className="flex items-center justify-center w-full text-white">
              <DraftsIcon className="text-[20px] text-gray-400" />
            </Link>
          </li>
          <li className={`flex items-center md:p-3 p-2 cursor-pointer ${pathname === '/mail' ? 'bg-zinc-900' : 'hover:bg-zinc-900'}`}>
            <Link href="/mail" className="flex items-center justify-center w-full text-white">
              <MailIcon className="text-[20px] text-gray-400" />
            </Link>
          </li>
          <li className={`flex items-center md:p-3 p-2 cursor-pointer ${pathname === '/inbox' ? 'bg-zinc-900' : 'hover:bg-zinc-900'}`}>
            <Link href="/inbox" className="flex items-center justify-center w-full text-white">
              <InboxIcon className="text-[20px] text-gray-400" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center md:p-3 p-2 hover:bg-zinc-900 cursor-pointer">
        <Link href="/settings" className="flex items-center justify-center w-full text-white">
          <SettingsIcon className="text-[20px] text-gray-400" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
