let options = {
    threshold: .99
}

let observer = new IntersectionObserver(callback,options);

function callback(entries) {
    entries.forEach(entry => {
        if(entry.boundingClientRect.top >= 0) {
            if (entry.intersectionRatio >= .99) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        }
    });
}

const targets = document.querySelectorAll(".showOnScroll");
targets.forEach(function(target) {
    observer.observe(target);
});