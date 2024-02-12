const url = 'http://192.168.0.100:8000/auth/registration'

const form = document.getElementById("form")

if (form) {
    form.addEventListener('submit', async event => {
        event.preventDefault()

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(new FormData(form))),
            })
            console.log(await response.json())
        } catch (err) {
            console.log(err.message)
        }
    })
}