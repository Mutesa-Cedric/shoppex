import React from 'react';
import { useRecoilValue } from 'recoil';
import AddItem from '../components/Item/AddItem';
import ItemPreview from '../components/Item/ItemPreview';
import ItemSideBar from '../components/Item/ItemSideBar';
import SideNav from '../components/UI/SideNav';
import useAuth from '../hooks/useAuth';
import { currentSideBar } from '../state/CurrentPageState';
interface LayoutProps {
    children: React.ReactNode
}
function MainLayout({ children }: LayoutProps) {
    const { initialLoading } = useAuth();
    const activeSideBar = useRecoilValue(currentSideBar)
    return (
        <div className="h-screen bg-[#FAFAFE] max-w-screen  flex items-center justify-center"
        >
            <div className=" w-full h-screen overflow-y-scroll flex justify-between" style={{ display: `${initialLoading ? "none" : ""}` }}>
                <SideNav />
                {children}
                {
                    activeSideBar === "viewItems" && <ItemSideBar />
                }
                {
                    activeSideBar === "addItem" && <AddItem />
                }
                {
                    activeSideBar === "previewItem" && <ItemPreview />
                }
            </div>
            {
                initialLoading &&
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            }
        </div>
    )
}

export default MainLayout