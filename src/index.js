const button = document.querySelectorAll('.menu-button');
const menu = document.querySelectorAll('.menu');
const mission = document.querySelectorAll(".mission")
const dropDown = document.querySelectorAll(".dropDown")


Array.from(menu).forEach((eachMenu, index) => {
    console.log(eachMenu)
    const eachButton = button[index]
    const eachMission = mission[index]
    const eachDropdown = dropDown[index] 

    eachButton.addEventListener('click', () => {
        eachMenu.classList.toggle('hidden');
        });

    
    eachMission.addEventListener("click", (e) => {
        e.preventDefault()
        eachDropdown.classList.toggle("hidden")
    })
})



