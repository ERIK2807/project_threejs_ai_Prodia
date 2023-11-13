
const prodiaKey= import.meta.env.VITE_KEY_PRODIA
const originhead = import.meta.env.VITE_HEADER_ORIGIN

export const peticionprodia = async(prompt) => {

	const base = "https://thingproxy.freeboard.io/fetch/https://api.prodia.com/v1";
	
	const headers = {
		"X-Prodia-Key": prodiaKey,
		"Origin": originhead // Agrega el header "Origin"
	};
	const createJob = async params => {
		const response = await fetch(`${base}/job`, {
			method: "POST",
			headers: {
				...headers,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		});
	
		if(response.status !== 200) {
			throw new Error(`Bad Prodia Response: ${response.status}`);
		}
	  
		return response.json();
	};
	
	const getJob = async (jobId) => {
		const response = await fetch(`${base}/job/${jobId}`, {
			headers,
		});
	
		if(response.status !== 200) {
			throw new Error(`Bad Prodia Response: ${response.status}`);
		}
	  
		return response.json();
	};
	
	let job = await createJob({
		model: "anything-v4.5-pruned.ckpt [65745d25]",
		prompt: prompt,
		negative_prompt: "",
		seed: 100,
		steps: 30,
		cfg_scale: 7,
		aspect_ratio: 'square',  //portrait,landscape,Square
	});
	
	// console.log("Job Created! Waiting...");
	
	while (job.status !== "succeeded" && job.status !== "failed") {
		await new Promise((resolve) => setTimeout(resolve, 250));
	
		job = await getJob(job.job);
	}
	
	if(job.status !== "succeeded") {
		throw new Error("Job failed!"); 
	}
	console.log("Generation completed!", job.imageUrl);
	return job.imageUrl;
}