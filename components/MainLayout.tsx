import React from 'react'
import { useRecoilValue } from 'recoil';
import { currentPageState } from '../atoms/CurrentPageState';
import useAuth from '../hooks/useAuth';
import ItemSideBar from './ItemSideBar';
import SideNav from './SideNav'
interface LayoutProps {
    children: React.ReactNode
}
function MainLayout({ children }: LayoutProps) {
    const { initialLoading } = useAuth();
    const currentPage = useRecoilValue(currentPageState);
    return (
        <div className="h-screen bg-[#FAFAFE] max-w-screen  flex items-center justify-center"
        >
            <div className=" w-full h-screen flex justify-between" style={{ display: `${initialLoading ? "none" : ""}` }}>
                <SideNav />
                {children}
                <ItemSideBar />
            </div>
            {
                initialLoading &&
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            }
        </div>
    )
}

export default MainLayout