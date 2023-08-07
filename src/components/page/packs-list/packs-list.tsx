import { useState } from 'react'

import { Link } from 'react-router-dom'

import { ArrowDown, ArrowUp, Edit, Play, Trash } from '../../../assets'
import { useDebounce } from '../../../common/hooks/use-debounce.ts'
import { cardsSlice } from '../../../services/cards'
import { useCreateDeckMutation, useGetDecksQuery, decksSlice } from '../../../services/decks'
import { useAppDispatch, useAppSelector } from '../../../services/store.ts'
import {
  Button,
  CheckboxDemo,
  Modal,
  SliderDemo,
  TableElement,
  TabSwitcher,
  TextField,
  Typography,
} from '../../ui'

import s from './packs-list.module.scss'

export const PacksList = () => {
  const tabSwitcherOptions = [
    { id: 1, value: 'My Cards' },
    { id: 2, value: 'All Cards' },
  ]

  const [packName, setPackName] = useState('')

  const initialName = useAppSelector(state => state.deckSlice.searchByName)
  const dispatch = useAppDispatch()

  const [sortTable, setSortTable] = useState(false)
  const [open, setOpen] = useState(false)
  const [privatePack, setPrivatePack] = useState(false)
  const changeSort = (status: boolean) => setSortTable(status)

  const newInitialName = useDebounce(initialName, 1000)

  const { data } = useGetDecksQuery({
    name: newInitialName,
    orderBy: sortTable ? 'created-desc' : 'created-asc',
    itemsPerPage: 20,
  })

  const [createDeck] = useCreateDeckMutation()
  const setSearchByName = (event: string) => {
    dispatch(decksSlice.actions.setSearchByName(event))
  }
  const handleCreateClicked = () => {
    createDeck({ name: packName })
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const setCurrentIdToStore = (id: string) => {
    dispatch(cardsSlice.actions.setCurrentPackId({ id }))
  }

  return (
    <div className={s.packListBlock}>
      <div className={s.headBlock}>
        <Typography variant={'large'}>Packs list</Typography>
        <Button variant={'primary'} onClick={handleOpen}>
          Add New Pack
        </Button>
      </div>
      <div className={s.settingsBlock}>
        <TextField
          value={initialName}
          type={'searchType'}
          className={s.textField}
          onChangeText={event => setSearchByName(event)}
          onSearchClear={() => setSearchByName('')}
        />
        <div>
          <Typography variant={'body2'} className={s.titleSettings}>
            Show packs cards
          </Typography>
          <TabSwitcher
            onChangeCallback={() => {}}
            options={tabSwitcherOptions}
            classname={s.switcher}
          />
        </div>
        <div>
          <Typography variant={'body2'} className={s.titleSettings}>
            Show packs cards
          </Typography>
          <SliderDemo minValue={0} maxValue={10} />
        </div>
        <Button variant={'secondary'}>
          <Trash />
          Clear Filter
        </Button>
      </div>
      <TableElement.Root>
        <TableElement.Head>
          <TableElement.Row>
            <TableElement.HeadCell>Name</TableElement.HeadCell>
            <TableElement.HeadCell>Cards</TableElement.HeadCell>
            <TableElement.HeadCell
              onClick={() => {
                changeSort(!sortTable)
              }}
            >
              Last Updated {sortTable ? <ArrowDown /> : <ArrowUp />}
            </TableElement.HeadCell>
            <TableElement.HeadCell>Created by</TableElement.HeadCell>
            <TableElement.HeadCell></TableElement.HeadCell>
          </TableElement.Row>
        </TableElement.Head>
        <TableElement.Body>
          {data?.items.map(el => {
            return (
              <TableElement.Row key={el.id}>
                <TableElement.Cell>
                  <Button
                    as={Link}
                    to="/my-pack"
                    variant={'link'}
                    onClick={() => setCurrentIdToStore(el.id)}
                  >
                    {el.name}
                  </Button>
                </TableElement.Cell>
                <TableElement.Cell>{el.cardsCount}</TableElement.Cell>
                <TableElement.Cell>
                  {new Date(el.created).toLocaleDateString('ru-RU')}
                </TableElement.Cell>
                <TableElement.Cell>{el.author.name}</TableElement.Cell>
                <TableElement.Cell>
                  <div className={s.icons}>
                    <Play />
                    <Edit />
                    <Trash />
                  </div>
                </TableElement.Cell>
              </TableElement.Row>
            )
          })}
        </TableElement.Body>
      </TableElement.Root>
      <Modal
        title={'Add New Pack'}
        showCloseButton={true}
        open={open}
        onClose={handleClose}
        titleButton={'Add New Pack'}
        disableButton={!packName}
        callBack={handleCreateClicked}
      >
        <TextField
          type={'default'}
          value={packName}
          label={'Name Pack'}
          placeholder={'name'}
          onChangeText={e => setPackName(e)}
        />
        <CheckboxDemo
          variant={'withText'}
          label={'Private pack'}
          checked={privatePack}
          onChange={() => setPrivatePack(!privatePack)}
        />
      </Modal>
    </div>
  )
}
