$(_=>{
			
			ext=(o,p)=>((p,r)=>(Object.keys(o).forEach(k=>r[k]=o[k]),Object.keys(p).forEach(k=>r[k]=p[k]),r))(o, p,{})
			
			tpsdef = {
				position: 'bottom',
				background: 'white',
				color: 'black',
				width: '25vw',
				maxWidth: '50vw'
			}
			
			tps=(nm,p={})=>$("#tipso-"+nm).tipso(ext(tpsdef,ext({contentElementId: "tipsocontent-"+nm}, p)))
			
			$("tipso").toArray().map(x=>x.id.split("tipso-")[1]).forEach(x=>tps(x, {tooltipHover: $("#tipso-"+x).attr("tooltipHover")=="true"}))
			
			})