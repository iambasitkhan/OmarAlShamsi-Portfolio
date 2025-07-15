"use client"

import { toggleMainMenu } from "@/store/togglePanelSlice";
import { useDispatch, useSelector } from "react-redux"

export default function MainmenuTogglerBtn() {
    const disptach = useDispatch();

    return <span className="cursor-pointer" onClick={() => disptach(toggleMainMenu())}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </span>
}