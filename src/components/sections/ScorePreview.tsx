import React from "react";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';

export function ScorePreview() {
	return (
		<section className="w-screen bg-[#F9FAFB] py-20 -mx-0">
			<div className="mx-auto max-w-7xl px-6">
				<div className="bg-gradient-to-br from-white via-emerald-50 to-white/80 rounded-2xl p-8 shadow-sm border border-transparent">
					<div className="flex items-center justify-center mb-6">
						<EqualizerOutlinedIcon className="mr-3 text-emerald-600"/>
						<h3 className="text-center text-xl font-extrabold text-slate-900 uppercase tracking-wide">ESG SCORE PREVIEW</h3>
					</div>
					<div className="flex flex-col lg:flex-row gap-8">

						<div className="flex-1">

							<div className="space-y-4">

								<div className="flex items-center justify-between rounded-xl bg-white/75 border border-slate-100 p-5 shadow-sm hover:shadow-md hover:bg-white/90 hover:border-slate-200 transition-colors transition-shadow duration-200 ease-in-out">
									<div className="flex items-center gap-4">
										<div className="rounded-full bg-emerald-100 p-3">
											<BoltOutlinedIcon className="text-emerald-600"/>
										</div>
										<div className="text-sm font-medium text-slate-800">EMISSIONS PERFORMANCE</div>
									</div>
									<div className="flex items-center gap-3">
										<div className="text-3xl font-extrabold text-emerald-600">70</div>
										<span className="rounded-full bg-emerald-600/10 px-3 py-1 text-sm font-medium text-emerald-800">Good</span>
									</div>
								</div>

								<div className="flex items-center justify-between rounded-xl bg-white/75 border border-slate-100 p-5 shadow-sm hover:shadow-md hover:bg-white/90 hover:border-slate-200 transition-colors transition-shadow duration-200 ease-in-out">
									<div className="flex items-center gap-4">
										<div className="rounded-full bg-emerald-100 p-3">
											<MovingOutlinedIcon className="text-emerald-600"/>
										</div>
										<div className="text-sm font-medium text-slate-800">SUSTAINABLE IMPROVEMENT RATE</div>
									</div>
									<div className="flex items-center gap-3">
										<div className="text-3xl font-extrabold text-emerald-600">5%</div>
										<span className="rounded-full bg-emerald-600/10 px-3 py-1 text-sm font-medium text-emerald-800">Rising</span>
									</div>
								</div>

								<div className="flex items-center justify-between rounded-xl bg-white/75 border border-slate-100 p-5 shadow-sm hover:shadow-md hover:bg-white/90 hover:border-slate-200 transition-colors transition-shadow duration-200 ease-in-out">
									<div className="flex items-center gap-4">
										<div className="rounded-full bg-amber-100 p-3">
											<ShieldOutlinedIcon className="text-[#E7B008]"/>
										</div>
										<div className="text-sm font-medium text-slate-800">COMPLIANCE READINESS</div>
									</div>
									<div className="flex items-center gap-3">
										<div className="text-xl font-extrabold text-[#E7B008]">LOW</div>
										<span className="rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-[#E7B008]">Needs Work</span>
									</div>
								</div>

								<div className="mt-6">
									<button className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:opacity-95">
										<svg className="h-5 w-5 opacity-90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										SEE YOUR FULL REPORT
									</button>
								</div>
							</div>
						</div>

						<aside className="w-full lg:w-1/3">
							<h4 className="text-2xl font-bold text-slate-900 mb-6">Why the banks should trust you</h4>

							<ul className="space-y-4">
								<li className="flex items-center gap-4 rounded-lg bg-white/60 p-4 shadow-sm hover:shadow-md hover:bg-white/80 hover:border-slate-200 transition-colors transition-shadow duration-200 ease-in-out">
									<div className="rounded-full bg-emerald-50 p-3">
										<TimelineOutlinedIcon className="text-emerald-600"/>
									</div>
									<div>
										<div className="font-semibold text-slate-800">Sensor Data</div>
										<div className="text-sm text-slate-500">Your data comes from sensor not self-report</div>
									</div>
								</li>

								<li className="flex items-center gap-4 rounded-lg bg-white/60 p-4 shadow-sm hover:shadow-md hover:bg-white/80 hover:border-slate-200 transition-colors transition-shadow duration-200 ease-in-out">
									<div className="rounded-full bg-emerald-50 p-3">
										<ShieldOutlinedIcon className="text-emerald-600"/>
									</div>
									<div>
										<div className="font-semibold text-slate-800">Security</div>
										<div className="text-sm text-slate-500">Tamper proof verification system</div>
									</div>
								</li>

								<li className="flex items-center gap-4 rounded-lg bg-white/60 p-4 shadow-sm hover:shadow-md hover:bg-white/80 hover:border-slate-200 transition-colors transition-shadow duration-200 ease-in-out">
									<div className="rounded-full bg-emerald-50 p-3">
										<MovingOutlinedIcon className="text-emerald-600"/>
									</div>
									<div>
										<div className="font-semibold text-slate-800">Real-time</div>
										<div className="text-sm text-slate-500">Live metrics updated continuously</div>
									</div>
								</li>
							</ul>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
}

