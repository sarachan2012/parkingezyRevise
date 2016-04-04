exports.handler = function(event, context) {

    var id = event.id;
    var avgduration = event.avgduration;
    var new_lots_num = event.new_lots_num;
    var waittime = 0;
    var inverseLots = 1;

    if (new_lots_num > 0){
        inverseLots = 1 / new_lots_num;
    }

    waittime = Math.round(avgduration * inverseLots);

    // return to the results to the application
    context.succeed({'id' : id, 'waittime': waittime});
};