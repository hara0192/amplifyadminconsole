import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '../../images/logo/logo.svg';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const trigger = useRef<HTMLButtonElement | null>(null);
  const sidebar = useRef<HTMLDivElement | null>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === 'true'
  );

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        !sidebar.current ||
        !trigger.current ||
        sidebar.current.contains(event.target as Node) ||
        trigger.current.contains(event.target as Node)
      ) {
        return;
      }
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', String(sidebarExpanded));
    if (sidebarExpanded) {
      document.body.classList.add('sidebar-expanded');
    } else {
      document.body.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
            LEARNING MODULES
          </h3>

          <ul className="mb-6 flex flex-col gap-1.5">
            <SidebarLinkGroup activeCondition={true}>
              {(handleClick, open) => (
                <>
                  <button
                    className="group relative flex w-full items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                    onClick={() => handleClick()}
                  >
                    High Level Design
                    <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                  </button>
                  <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
  <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
    <li>
      <NavLink
        to="/calendar"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        Scalability
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/availability"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        Availability
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/cap-theorem"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        CAP Theorem
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/acid-transactions"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        ACID Transactions
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/consistent-hashing"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        Consistent Hashing
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/rate-limiting"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        Rate Limiting
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/spof"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        SPOF
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/fault-tolerance"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        Fault Tolerance
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/consensus-algorithms"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        Consensus Algorithms
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/gossip-protocol"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        Gossip Protocol
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/service-discovery"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        Service Discovery
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/api-design"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        API Design
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/disaster-recovery"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        Disaster Recovery
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/distributed-tracing"
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive ? '!text-white' : '')
        }
      >
        Distributed Tracing
      </NavLink>
    </li>
  </ul>
</div>

                </>
              )}
            </SidebarLinkGroup>

            <SidebarLinkGroup activeCondition={false}>
              {(handleClick, open) => (
                <>
                  <button
                    className="group relative flex w-full items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                    onClick={() => handleClick()}
                  >
                    Low Level Design
                    <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                  </button>
                  
                  <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                      <li className="hover:text-white">Basics OOP Concepts</li>
                      <li className="hover:text-white">SOLID Principles with Pictures</li>
                      <li className="hover:text-white">SOLID Principles with Code</li>
                      <li className="hover:text-white">DRY Principle</li>
                      <li className="hover:text-white">YAGNI Principle</li>
                      <li className="hover:text-white">KISS Principle</li>
                      <li className="hover:text-white">Coursera - Object-Oriented Design</li>
                    </ul>
                  </div>
                </>
              )}
            </SidebarLinkGroup>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
