async function sleep(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    })
}

async function randomDelay() {
    const randomTime = Math.round(Math.random() * 1000)
    return sleep(randomTime)
}

class ShipmentSearchIndex {
    async updateShipment(id: string, shipmentData: any) {
        const startTime = new Date()
        await randomDelay()
        const endTime = new Date()
        console.log(`update ${id}@${
            startTime.toISOString()
            } finished@${
            endTime.toISOString()
            }`
        )

        return { startTime, endTime }
    }
}

// Implementation needed
interface ShipmentUpdateListenerInterface {
   receiveUpdate(id: string, shipmentData: any)
   newShipment : ShipmentSearchIndex
}

class ShipmentUpdater extends ShipmentSearchIndex implements ShipmentUpdateListenerInterface {
    newShipment = new ShipmentSearchIndex;
    async receiveUpdate(id: string, shipmentData: any){
        this.newShipment.updateShipment(id, shipmentData);
    }
}

let update = new ShipmentUpdater;
let id ="1";
let shipmentData = ["a", "b", "c"];
update.receiveUpdate(id, shipmentData);


