
function Case({ caseData }) {
	return (

		<div className="Case">
			<h2>{caseData.coutry}</h2>
			<P>Total Cases:{caseData.cases}</P>
			<p>Active Cases:{caseData.active}</p>
			<p>Recovered Cases:{caseData.recovered}</p>
			<P>Death Cases:{caseData.deaths}</P>


			{/* styling */}
			<style jsx>
				{`

          .case{
            height:30rem;
            padding:3rem;
            background-color:var(--color-primary);
            animation:fadeIn 2s ease-in;
        }
         @keyframes fadeIn {
					0%{
						opacity:0;
						transform:translateY(50%);
						}
					100%{
						opacity:1;
						transform: translateY(0%)
					}
        }
         `}
			</style>

		</div>
	);
} 
