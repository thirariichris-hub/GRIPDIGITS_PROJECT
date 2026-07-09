"use client";

import {
Lock,
Cloud,
Database,
Fingerprint,
Shield,
Zap
} from "lucide-react";

const features = [
{
icon: Fingerprint,
title: "Biometric Recognition"
},
{
icon: Zap,
title: "Fast Verification"
},
{
icon: Shield,
title: "Anti-Spoof Detection"
},
{
icon: Lock,
title: "AES-256 Encryption"
},
{
icon: Database,
title: "Secure Database"
},
{
icon: Cloud,
title: "Cloud Integration"
}
];

export default function Features(){

return(

<section
id="features"
className="py-28 bg-slate-950"
>

<div className="max-w-7xl mx-auto px-8">

<div className="text-center">

<h2 className="text-5xl font-bold">
Key Features
</h2>

<p className="mt-5 text-slate-400">
Enterprise-grade biometric technology.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

{features.map((feature)=>{

const Icon = feature.icon;

return(

<div
key={feature.title}
className="rounded-3xl border border-slate-800 bg-slate-900 p-10 hover:border-blue-500 transition"
>

<Icon
size={48}
className="text-blue-500"
/>

<h3 className="text-2xl font-semibold mt-6">
{feature.title}
</h3>

<p className="text-slate-400 mt-5 leading-7">

Fast, secure and intelligent authentication
designed for mission-critical environments.

</p>

</div>

);

})}

</div>

</div>

</section>

);

}