import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { ToNode } from './ToNode'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'

type Props = {
  selectedType: string
  setSelectedFromNode: (type: string) => void
  setSelectedToNode: (type: string) => void
}

export const TitleEditor: FC<Props> = ({ selectedType, setSelectedFromNode, setSelectedToNode }) => (
  <Flex>
    <Flex align="center" direction="row" justify="space-between" mb={35}>
      <Flex align="center" direction="row">
        <StyledText>Add Edge</StyledText>
      </Flex>
    </Flex>

    <Flex mb={25}>
      <Flex mb={12}>
        <Text>Source</Text>
      </Flex>
      <ToNode dataTestId="from_node" onSelect={setSelectedFromNode} />
    </Flex>

    <Flex mb={10}>
      <Flex mb={12}>
        <Text>Edge Name</Text>
      </Flex>
      <Flex mb={12}>
        <TextInput
          id="cy-item-name"
          maxLength={250}
          name="type"
          placeholder="Enter type name"
          rules={{
            ...requiredRule,
          }}
          value={selectedType}
        />
      </Flex>
    </Flex>

    <Flex mb={25}>
      <Flex mb={12}>
        <Text>Destination</Text>
      </Flex>
      <ToNode dataTestId="to_node" onSelect={setSelectedToNode} />
    </Flex>
  </Flex>
)

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
`
