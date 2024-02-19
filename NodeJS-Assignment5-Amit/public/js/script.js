

let status = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
};
// let users_json;
// let users_json = [{
// 		userId: 1,
// 		name: "Jon Snow",
// 		profilePicture:
// 			"https://cg0.cgsociety.org/uploads/images/original/hosseindiba-jon-snow-1-b968195d-au6q.jpeg",
// 		statusMessage: "We become what we think about!",
// 		presence: 1,
// 	},
// 	{
// 		userId: 2,
// 		name: "Daenerys Targaryen",
// 		profilePicture:
// 			"https://preview.redd.it/hlxen8gtwpm01.jpg?width=640&crop=smart&auto=webp&v=enabled&s=a3c43bcbfc1db31d542ef67071559264358b3d2b",
// 		statusMessage: "A positive mindset brings positivethings.",
// 		presence: 3,
// 	},
// 	{
// 		userId: 3,
// 		name: "Tyrion Lannister",
// 		profilePicture:
// 			"https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a3f5237411193.573f25019c8bf.jpg",
// 		statusMessage: "One small positive thought can change your whole day",
// 		presence: 3,
// 	},
// 	{
// 		userId: 4,
// 		name: "Jaime Lannister",
// 		profilePicture:
// 			"https://images.nightcafe.studio/jobs/mWfF1s7OOVg5DMTYiNZ8/mWfF1s7OOVg5DMTYiNZ8--4--qccau.jpg?tr=w-1600,c-at_max",
// 		statusMessage: "I am a rockstar",
// 		presence: 1,
// 	},
// 	{
// 		userId: 5,
// 		name: "Arya Stark",
// 		profilePicture:
// 			"https://64.media.tumblr.com/21de4501827aba1c6463ce2ae6a36780/tumblr_ps5le9xxRb1w9a5vgo1_1280.jpg",
// 		statusMessage: "I am using Gradious messenger",
// 		presence: 4,
// }];

function visibileUserForm() {
	document.getElementById('updateUserForm').style.display = 'none';
	document.getElementById("addUserForm").style.display = "block";
}


// //-------------add User------------------------
function addUser() {
	event.preventDefault();
	let userName = document.getElementById("name").value;
	console.log(userName);
	let userStatus = document.getElementById("statusMessage").value;
	console.log(userStatus);
	let userProfilePic = document.getElementById("profilePicLink").value;
	console.log(userProfilePic)
	let userPresence = document.getElementById("presence").value;
	console.log(userPresence);
	// let dataSize = users_json.length;
	// users_json.unshift({
	// 	userId: dataSize+1,
	// 	name:userName,
	// 	profilePicture:userProfilePic,
	// 	statusMessage:userStatus,
	// 	presence:userPresence});
	const body = JSON.stringify({
		name: userName,
		profilePicture: userProfilePic,
		statusMessage: userStatus,
		presence: userPresence
	});
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "http://localhost:8080/buddylist",true);
	xhr.setRequestHeader("Content-Type", "application/json")
	xhr.send(body);
	xhr.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			display();
		}
	}
	
	

	// display();
	document.getElementById('name').value = '';
	document.getElementById('statusMessage').value = '';
	document.getElementById('profilePicLink').value = '';
	document.getElementById('presence').value = '';
	document.getElementById('addUserForm').style.display = 'none';
	// event.preventDefault();

}


function display() {
	let users_json;

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "http://localhost:8080/buddylist", true);
	xhttp.send();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4) {
			if (this.status == 200) {
				users_json = JSON.parse(xhttp.response);
				console.log("data coming from server ", users_json)
				let mainContent = "";
				// let userContainer;
				for (let i = 0; i < users_json.length; i++) {
					let userContainer = `<div class="user">
				<div class="img-container">
				<img src=${users_json[i].profilePicture} class='user-image ${status[users_json[i].presence]}' alt="user image" />
				</div>
				<div class="user-detail">
				<p class="user-name">${users_json[i].name}</p>
				<p class="user-message">${users_json[i].statusMessage}</p>
				</div>
				<div class='three-btn'>
					<div class="dropdown">
						<a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
							<ul class="dropdown-menu">
							<li><button id='USR0001' onclick='deleteItem(${users_json[i].userId})'class="dropdown-item ">Delete</button></li>
						<li><button  id='update-USR0001' onclick='updateItem(${users_json[i].userId})'class="dropdown-item ">Update</button></li>
					</ul>
				</div>
			</div>
		</div>`;
					mainContent = mainContent + userContainer;
				}

				document.getElementById("root").innerHTML = mainContent;
				// display();
				// display(JSON.parse(this.responseText));  //getting the responce of emp data
			}
		}
	}


	// event.preventDefault();
}

//-------------delete user----------------------
function deleteItem(newUserId) {
	console.log("front end user id ",newUserId)
	const xhr = new XMLHttpRequest();
	xhr.open("DELETE", "http://localhost:8080/buddylist/"+newUserId,true);
	xhr.setRequestHeader("Content-Type", "application/json")
	xhr.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			
			display();

		}
	}
	
	xhr.send();
	//=================
	// for (let i = 0; i < users_json.length; i++) {
	// 	if (users_json[i].userId == newUserId) {
	// 		users_json.splice(i, 1);
	// 	}
	// }
	

}

// // //------------update user----------------------

let user_id;
function updateItem(newUserId) {
	document.getElementById('addUserForm').style.display = 'none';
	user_id = newUserId;
	document.getElementById('updateUserForm').style.display = 'block';
	// display();


}

function updateUser() {

	let userName = document.getElementById("name1").value;
	console.log(userName);
	let userStatus = document.getElementById("statusMessage1").value;
	console.log(userStatus);
	let userProfilePic = document.getElementById("profilePicLink1").value;
	console.log(userProfilePic)
	let userPresence = document.getElementById("presence1").value;
	console.log(userPresence);
	// console.log("userid ", user_id);
	// for (let i = 0; i < users_json.length; i++) {
	// 	if (users_json[i].userId == user_id) {
	// 		users_json[i].name = userName;
	// 		users_json[i].statusMessage = userStatus;
	// 		users_json[i].profilePicture = userProfilePic;
	// 		users_json[i].presence = userPresence;
	// 	}
	// }
	const body = JSON.stringify({
		userId:user_id,
		name: userName,
		profilePicture: userProfilePic,
		statusMessage: userStatus,
		presence: userPresence
	});
	const xhr = new XMLHttpRequest();
	xhr.open("PUT", "http://localhost:8080/buddylist",true);
	xhr.setRequestHeader("Content-Type", "application/json")
	xhr.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			
			display();

		}
	}
	
	xhr.send(body);


	// display();
	event.preventDefault();

}


window.onload = display;



















