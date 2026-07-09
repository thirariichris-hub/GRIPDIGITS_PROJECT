"use client";

const steps = [

"Citizen places hand above scanner",

"AI captures biometric landmarks",

"Encrypted biometric template is generated",

"Database compares identity",

"Identity verified in under 2 seconds"

];

export default function HowItWorks(){

return(

<section
id="technology"
className="py-28 bg-slate-900"
>

<div className="max-w-6xl mx-auto px-8">

<div className="text-center">

<h2 className="text-5xl font-bold">
How It Works
</h2>

<p className="mt-5 text-slate-400">

Simple for the user.
Powerful behind the scenes.

</p>

</div>

<div className="mt-20 space-y-8">

{steps.map((step,index)=>(

<div
key={step}
className="flex items-center gap-8 bg-slate-950 rounded-3xl border border-slate-800 p-8"
>

<div
className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold"
>

{index+1}

</div>

<div>

<h3 className="text-2xl font-semibold">

{step}

</h3>

<p className="text-slate-400 mt-2">

Secure biometric verification powered by GripDigits AI.

</p>

</div>

</div>

))}

</div>

</div>

</section>

);

}