const triviaQuestions = [
	{
		question: "What is unusual about the videotape in The Ring?",
		options: {
			a: "It won't burn if fire",
			b: "It doesn't have a time code",
			c: "It can't be copied",
			d: "It's More than 100 years old"
		},
		answer: "b",
		explaination: "The tape's overscan does not include time code, which suggests that it wasn't made using electronic equipment."
	},
	{
		question: "What is the name of the apartment building Guy and Rosemary move into in Rosemary's Baby?",
		options: {
			a: "The Brodsky",
			b: "The Branson",
			c: "The Bramford",
			d: "The Brockworth"
		},
		answer: "c",
		explaination: "Author Ira Levin chose the name 'Bramford' in honor of Bram Stoker, the creator of "
	},
	{
		question: "Who is responsible for releasing the deadly virus in 28 Days Later?",
		options: {
			a: "Taxi Driver",
			b: "Islamic Terrorists",
			c: "Animal Rights Activists",
			d: "The Chinese Government"
		},
		answer: "c",
		explaination: "A highly contagious, rage-inducing virus is unleashed in Great Britain after a group of animal rights activists attempt to free chimpanzees infected with the virus in Cambridge."
	},
	{
		question: "Which room does Dick Hallorann tell Danny to stay away from in The Shining?",
		options: {
			a: "311",
			b: "119",
			c: "455",
			d: "237"
		},
		answer: "d",
		explaination: "Danny visits room 237 after a ball rolls to him from its open door. Later, he claims that a 'crazy woman' tried to strangle him."
	},
	{
		question: "Whose skin does Kirsty wear in Hellbound: Hellraiser II?",
		options: {
			a: "Frank's",
			b: "Julia's",
			c: "Larry's",
			d: "Tiffany's"
		},
		answer: "b",
		explaination: "Kirsty finds Julia's skin and wears it to distract Channard, giving Tiffany enough time to solve the Lament Configuration and close the door to hell."
	},
	{
		question: "What classic horror movie was originally titled The Babysitter Murders?",
		options: {
			a: "A Nightmare on Elm Street",
			b: "Rosemary's Baby",
			c: "Scream",
			d: "Halloween"
		},
		answer: "d",
		explaination: "Director John Carpenter originally intended to call his movie The Babysitter Murders, but producer Irwin Yablans thought the story might resonate more if it were based around a specific holiday, so the title was changed to Halloween."
	
	},
	{
		question: "What horror film was the first movie to show a woman in just a bra and slip?",
		options: {
			a: "The Haunting",
			b: "Psycho",
			c: "The Wax Musium",
			d: "Bride of Frankenstein"
		},
		answer: "b",
		explaination: "In the opening scene of Psycho, Marion Crane (played by Janet Leigh) wears only a white bra and half-slip, having just had a mid-day tryst with her divorced lover in a hotel. While the scene leaves much to the modern imagination, in 1960 it was shockingly direct."
	}

]


const container = document.querySelector('#questionDiv')
// const nextBtn = document.querySelector('#')
// render each question on single page
const renderQuestion = ({question, options}) => {
	return `<div>
				<h3>${question}</h3>
				<p>${options.a}</p>
				<p>${options.b}</p>
				<p>${options.c}</p>
				<p>${options.d}</p>
			</div>`
}

const renderQuestions = (questions) => {
	let html = "";
	for(let question of questions) {
		html += renderQuestion(question)
	}

	container.innerHTML = html
}

renderQuestions(triviaQuestions)


// render one quesiton at a time

