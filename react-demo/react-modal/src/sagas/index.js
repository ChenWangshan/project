import projectsSaga from './projects'

/**
 * 所有saga集合
 * @return {IterableIterator<*>}
 */
function* sagas () {
    yield* projectsSaga();
}

export default sagas;
