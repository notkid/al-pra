/**
 * 
 * 1396. 设计地铁系统
 * 
 */

 var UndergroundSystem = function() {
    this.user = {}
    this.trip = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.user[id] = {
        stationName,
        t
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const { user, trip } = this
    if (!user[id]) return
    const { stationName:_s, t:_t} = user[id]
    const costT = t- _t
    if (!trip[_s]) {trip[_s] = {}}
    if (trip[_s][stationName]) {
        const  [cost, nums] = trip[_s][stationName]
        trip[_s][stationName] = [cost + costT, nums +1]
    } else {
        trip[_s][stationName] = [costT, 1]
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const { trip } = this
    if (!trip[startStation]) return
    const [cost , nums] = trip[startStation][endStation]
    return cost/nums
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */