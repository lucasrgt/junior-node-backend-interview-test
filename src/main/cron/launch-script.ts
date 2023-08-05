import axios from 'axios'

import { container } from 'tsyringe'
import { Launch } from '../../domain/models'
import { HttpResponse } from '../../application/contracts/http'
import { AddLaunchController } from '../../application/controllers/launch'

/** Request latest launches from the official SpaceX API */
const fetchLaunchFromSpaceX = async (): Promise<string | void> => {
  try {
    const response = await axios.get<Launch>(
      'https://api.spacexdata.com/v5/launches/latest'
    )

    const launch = response.data

    if (launch.id === undefined) {
      return 'No launch was found.'
    }

    save(launch)
  } catch (error) {
    throw new Error()
  }
}

/** Save found launch from fetch into the database. */
const save = async (launch: Launch): Promise<void | HttpResponse<Error>> => {
  const addLaunchController = container.resolve(AddLaunchController)

  const { id, ...launchWithoutId } = launch

  const createdLaunch = await addLaunchController.handle({
    body: launchWithoutId
  })

  if (!createdLaunch) {
    console.log('No launch was created.')
    throw new Error()
  }

  if (id == undefined) {
    console.log('Could not create launch')
    throw new Error()
  }

  console.log(`Launch with id: ${id} was created successfully.`)
}

export default fetchLaunchFromSpaceX
