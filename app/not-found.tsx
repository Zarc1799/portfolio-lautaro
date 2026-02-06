import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-blue-900 text-white font-mono p-8 flex flex-col justify-center items-center select-none">
            <div className="max-w-3xl w-full">
                <h1 className="text-9xl mb-4">:(</h1>
                <h2 className="text-3xl mb-12">
                    Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.
                </h2>
                <div className="flex items-center gap-8">
                    <div className="w-32 h-32 bg-white p-2">
                        {/* QR Code Placeholder using CSS */}
                        <div className="w-full h-full bg-blue-900/10 grid grid-cols-4 grid-rows-4 gap-1">
                            <div className="bg-black col-span-2 row-span-2 font-black text-xs flex items-center justify-center text-white p-1 text-center">QR CODE</div>
                            <div className="bg-black col-span-1 row-span-1"></div>
                            <div className="bg-black col-span-1 row-span-1 col-start-4"></div>
                            <div className="bg-black col-span-1 row-span-1 row-start-4"></div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-2">20% complete</p>
                        <p className="text-sm opacity-80 mb-1">
                            For more information about this issue and possible fixes, visit https://www.lautaromir.dev/support
                        </p>
                        <p className="text-sm opacity-80">
                            If you call a support person, give them this info:
                        </p>
                        <p className="text-sm opacity-80 mt-1">
                            Stop Code: <span className="font-bold">CRITICAL_PROCESS_DIED</span>
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/"
                                className="inline-block bg-white text-blue-900 px-6 py-2 font-bold hover:bg-gray-200 transition-colors"
                            >
                                REBOOT SYSTEM NOW_
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
