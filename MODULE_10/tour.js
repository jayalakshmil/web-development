var tour = new Tour({
    storage : false
});

var name = '';

tour.addSteps(
    [
        {
            element : '#col-1',
            placement : 'bottom',
            title : 'edureka',
            content : 'Get an Industry Recognized Certification from Edureka. Become proficient in your domain! Get Ready to Achieve your Learning Goals with Edureka. Take your career to next level. Learn by Industry Experts. Earlybird Offer Available. 24/7 Lifetime Support.<br/> <h5>Please Enter Your Name</h5> <br/> <input type="text" id="name"/> ',
                onNext : function() {
                name = $('#name').val();
                console.log('hello');

            }
        },
        {
            element : '#col-2',
            placement : 'bottom',
            title : 'courses',
            content : function(){
                    return ' Hello '+  name + ', PG Programs - Digital Marketing - Artificial Intelligence - Databases';
            } 
            
        },
        {
            element : '#main-carousel',
            placement : 'bottom',
            title : 'main-carousel',
            content : 'total courses and offers right here'
        },
        {
            element : '#nav3',
            placement : 'top',
            title : 'All departments',
            content : 'PG Programs - Digital Marketing - Artificial Intelligence - Databases'
        },
        {
            element : '#col-3',
            placement : 'top',
            title : 'Hadoop Tutorial Theme',
            content : 'Hadoop Tutorial Theme'
            
        },
        {
            element : '#col-4',
            placement : 'top',
            title : 'Python-Interview-Questions',
            content : 'Python-Interview-Questions'
            
        },
        {
            element : '#col-5',
            placement : 'top',
            title : 'SQL-interview-questions',
            content : 'SQL-interview-questions'
            
        },
        {
            element : '#col-6',
            placement : 'top',
            title : 'React-Interview',
            content : 'React-Interview'
            
        },
        {
            element : '#col-7',
            placement : 'top',
            title : ' Object-Oriented-Programming',
            content : ' Object-Oriented-Programming'           
        },
        {
            element : '#col-8',
            placement : 'top',
            title : 'Tableau-Interview-Questions',
            content : 'Tableau-Interview-Questions'
            
        },
        {
            element : '#col-9',
            placement : 'top',
            title : 'Discover Top Categories',
            content : 'Discover Top Categories'
            
        },
        {
            element : '#social-media',
            placement : 'top',
            title : 'Social Media',
            content : 'facebook , twitter , youtube , google+ etc....'
            
        },
        {
            orphan : true,
            placement :' top',
            title : "Thank you",
            backdrop : true,
            content : 'Thank you for visiting the site'
        },
    ]
);
    $(document).ready(function(){
        $('#tour-start-btn').on ('click',function(){
            tour.init();
            tour.start();
        })
    });
