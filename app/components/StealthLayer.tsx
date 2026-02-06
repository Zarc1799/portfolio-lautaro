"use client";

import { useStealth } from "../context/StealthContext";
import { useState, useEffect } from "react";

export default function StealthLayer() {
    const { isStealth, toggleStealth } = useStealth();
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().toLocaleDateString());
    }, []);

    if (!isStealth) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-white text-black font-sans text-xs overflow-hidden cursor-default select-none">
            {/* Fake Excel Toolbar */}
            <div className="bg-[#217346] text-white p-2 flex items-center justify-between">
                <div className="flex gap-4 font-bold">
                    <span>File</span>
                    <span>Home</span>
                    <span>Insert</span>
                    <span>Page Layout</span>
                    <span>Formulas</span>
                    <span>Data</span>
                </div>
                <div>System_Audit_Log_Q1_2026.xlsx - Excel</div>
            </div>

            {/* Fake Ribbon */}
            <div className="bg-[#f3f2f1] border-b border-gray-300 h-24 flex items-center px-4 text-gray-500">
                (Restricted View - Read Only Mode)
            </div>

            {/* Fake Grid */}
            <div className="p-1 h-full bg-white overflow-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="bg-gray-100 border border-gray-300 w-10"></th>
                            {["A", "B", "C", "D", "E", "F", "G", "H"].map((col) => (
                                <th key={col} className="bg-gray-100 border border-gray-300 px-4 py-1 font-normal text-gray-600">
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(30)].map((_, row) => (
                            <tr key={row}>
                                <td className="bg-gray-100 border border-gray-300 text-center text-gray-500">
                                    {row + 1}
                                </td>
                                <td className="border border-gray-300 px-2 py-0.5 whitespace-nowrap">
                                    {row === 0 ? "ID" : `REQ-${1000 + row}`}
                                </td>
                                <td className="border border-gray-300 px-2 py-0.5 whitespace-nowrap">
                                    {row === 0 ? "TIMESTAMP" : `${date} 09:${10 + row}:23`}
                                </td>
                                <td className="border border-gray-300 px-2 py-0.5 whitespace-nowrap">
                                    {row === 0 ? "SEVERITY" : row % 7 === 0 ? "CRITICAL" : "INFO"}
                                </td>
                                <td className="border border-gray-300 px-2 py-0.5 whitespace-nowrap w-96">
                                    {row === 0 ? "MESSAGE" : `System process audit ${row % 2 === 0 ? "completed" : "pending"}...`}
                                </td>
                                <td className="border border-gray-300 px-2 py-0.5 whitespace-nowrap">
                                    {row === 0 ? "USER" : "admin"}
                                </td>
                                <td className="border border-gray-300 px-2 py-0.5 whitespace-nowrap">
                                    {row === 0 ? "STATUS" : "200 OK"}
                                </td>
                                <td className="border border-gray-300 px-2 py-0.5 whitespace-nowrap bg-blue-50 text-blue-700 cursor-pointer hover:underline" onClick={toggleStealth}>
                                    {row === 0 ? "ACTION" : "View"}
                                </td>
                                <td className="border border-gray-300 px-2 py-0.5 whitespace-nowrap"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 w-full bg-[#f3f2f1] border-t border-gray-300 px-4 py-1 text-gray-500 flex justify-between">
                <span>Ready</span>
                <span>Average: 243.5 | Count: 569</span>
            </div>
        </div>
    );
}
