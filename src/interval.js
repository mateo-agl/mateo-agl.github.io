const interval = (fn) => {
    let baseline = new Date().getTime();
    let timeout = null;

    let run = () => {
        baseline += 1000;
        timeout = setTimeout(function() {
        run();
        fn();
        }, baseline - new Date().getTime());
    }

    run();

    let stop = () => {
        clearTimeout(timeout)
    }
    return {
        stop: stop
    }
}

export default interval;