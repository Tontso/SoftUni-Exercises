function solve() {
    let addButtonElement = document.querySelector('.admin-view .action button');
    let modules ={};

    addButtonElement.addEventListener('click', (e) =>{
        e.preventDefault();

        let lectureNameElement = document.querySelector('input[name = "lecture-name"]');
        let lectureDateElement = document.querySelector('input[name = "lecture-date"]');
        let lectureModuleElement = document.querySelector('select[name = "lecture-module"]');

        if(! lectureNameElement.value || !lectureDateElement.value || lectureModuleElement === 'Select module...'){
            return;
        }

        if(!modules[lectureModuleElement.value]){
            modules[lectureModuleElement.value] = [];
        }
        
        let currentLectures = {
            name: lectureNameElement.value,
            date: formatDateInput(lectureDateElement.value)
        }
        modules[lectureModuleElement.value].push(currentLectures);


        lectureNameElement.value = '';
        lectureDateElement.value = '';
        lectureModuleElement = 'Select module';

        createTrainings(modules);

    });

    function createTrainings(modules){

        let modulesList = document.querySelector('.modules');
        modulesList.innerHTML = '';

        for (const moduleName in modules) {
            let moduleElement = createModule(moduleName);
            let ulList = document.createElement('ul');

            // Sort
            let lectures = modules[moduleName];
            lectures.sort((a, b) => a.date.localeCompare(b.date));

            lectures.forEach(({name, date}) =>{
                ulList.appendChild(createLecture(name, date))

                ulList.querySelector('button').addEventListener('click', (e) => {
                    modules[moduleName] = modules[moduleName].filter(x => !(x.name == name && x.date == date));
                    
                    if(modules[moduleName].length == 0){
                        delete modules[moduleName];
                        // e.currentTarget.parentNode.parentNode.parentNode.remove();
                        e.currentTarget.closest('.module').remove();
                    } else{
                        e.currentTarget.parentNode.remove();
                    }
                    
                });
            });
          
            moduleElement.appendChild(ulList);
            modulesList.appendChild(moduleElement);
        }
        
    }

    function createModule(moduleName){
        let divElement = document.createElement('div');
        divElement.classList.add('module');

        let headModuleElement = document.createElement('h3');
        headModuleElement.textContent = `${moduleName.toUpperCase()}-MOLUDE`;

        divElement.appendChild(headModuleElement);
        

        return divElement;
    }


    function createLecture(lectureName, lectureDate){

        liElement = document.createElement('li');
        liElement.classList.add('flex');

        let courseHeadElement = document.createElement('h4');
        courseHeadElement.textContent = 
            `${lectureName} - ${lectureDate}`;
        

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('red');
        deleteButtonElement.textContent = 'del';

        liElement.appendChild(courseHeadElement);
        liElement.appendChild(deleteButtonElement);

        return liElement;
    }


    function formatDateInput(dateInput){
        let[date, time] = dateInput.split('T');
        date = date.replaceAll('-', '/');
        
        return `${date} - ${time}`;
    }
};