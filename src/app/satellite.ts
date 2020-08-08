export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    alternateColor: string = ".warning";

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }  

    shouldShowWarning() {
        let checkLower = this.type.toLowerCase()
        if(checkLower === 'space debris') {
            return true;
        } else {
            return false;
        }
    }

}