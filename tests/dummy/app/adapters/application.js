import FirestoreAdapter from 'emberfire/adapters/firestore';

export default FirestoreAdapter.extend({
    enablePersistence: true,
    persistenceSettings: { experimentalTabSynchronization: true }
})

/*
import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';

export default RealtimeDatabaseAdapter.extend({});*/