$(document).ready(function(){

	let url = "https://newsapi.org/v2/top-headlines?country=my&apiKey=ff971b9ea77d400e81d2b381c5f22c51"
	

	$.ajax({
		url:url,
		method:"GET",
		dataType:"Json",

		beforeSend: function(){
			$(".progress").show();
		},

		complete:function(){
			$(".progress").hide();
		},

		success: function(news){
			let output = "";
			let latestNews = news.articles;
			
			for(let i = 0; i < 7; i++){
				output +=`
				
				
				<div class="row" style="height: 100px; border-style: solid; border-radius: 7px;">
					
					
				<div class="card-content" style="background-color: transparent;">
					<span class="card-title activator">
					</span>
					<h1 ="${latestNews[i].url}" style=" text-decoration: none; color: white; font-size: 18px; font-weight: bold; text-align: justify; line-height: 1.6;">${latestNews[i].title}</a> 
					</div>
					
				</div>
				
					</div>
				
				`;
			}

			if(output !== ""){
				$("#newsResults").html(output);
			}
		},

		error: function(){
				$("#newsResults").html("Error Occured");
		}
		
		//setTimeout(function () {
			
		//}, 600000);

	
	})
})