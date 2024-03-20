import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'
import { capitalizeString } from '~/utils/capitalize'
import { AddItemModalStepID } from '..'
import { NoParent } from '../SourceTypeStep/constants'
import { TOption } from '../SourceTypeStep/types'

type Props = {
  skipToStep: (step: AddItemModalStepID) => void
  // eslint-disable-next-line react/no-unused-prop-types
  onSelectType: (val: string) => void
}

export const SelectCustomNodeParent: FC<Props> = ({ onSelectType, skipToStep }) => {
  const [option, setOption] = useState<TOption[] | null>(null)

  useEffect(() => {
    const init = async () => {
      const data = await getNodeSchemaTypes()

      const schemaOptions = data.schemas.map((schema) => ({
        label: capitalizeString(schema.type),
        value: schema.type,
      }))

      setOption([...schemaOptions, NoParent])
    }

    init()
  }, [])

  const onSelect = (val: TAutocompleteOption | null) => {
    onSelectType(val?.label || '')
  }

  return (
    <Flex>
      <Flex mb={20}>
        <StyledText>Select Parent</StyledText>
      </Flex>
      <Flex direction="row" mb={20}>
        <AutoComplete autoFocus onSelect={onSelect} options={option} />
      </Flex>
      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={() => skipToStep('sourceType')} size="large" variant="contained">
            Prev
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button color="secondary" onClick={() => skipToStep('createType')} size="large" variant="contained">
            Next
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export const CreateCustomTypeStep: FC<Props> = ({ skipToStep }) => (
  <Flex>
    <Flex mb={20}>
      <StyledText>Enter Type Name</StyledText>
    </Flex>
    <Flex mb={12}>
      <TextInput
        id="cy-item-name"
        maxLength={50}
        name="name"
        placeholder="Enter Type Name..."
        rules={{
          ...requiredRule,
        }}
      />
    </Flex>
    <Flex direction="row">
      <Flex grow={1}>
        <Button color="secondary" onClick={() => skipToStep('selectParent')} size="large" variant="contained">
          Prev
        </Button>
      </Flex>
      <Flex grow={1} ml={20}>
        <Button color="secondary" onClick={() => skipToStep('setBudget')} size="large" variant="contained">
          Next
        </Button>
      </Flex>
    </Flex>
  </Flex>
)

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`