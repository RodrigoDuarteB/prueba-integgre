class LocalStorageService {

    saveData(key: string, data: any): any {
        localStorage.setItem(key, JSON.stringify(data))
        return this.getData(key)
    }

    getData(key: string): any {
        var data = localStorage.getItem(key)
        if(data){
            return JSON.parse(data)
        }
        return null
    }

}

export default new LocalStorageService