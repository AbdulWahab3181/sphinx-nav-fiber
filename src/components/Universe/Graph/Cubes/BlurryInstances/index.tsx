import { Instance, Instances } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { useGraphData } from '~/components/DataRetriever'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { boxGeometry, isMainTopic } from '../constants'
import { blurryMaterial } from './constants'

type InstanceProps = {
  hide?: boolean
}

export const BlurryInstances = ({ hide }: InstanceProps) => {
  const data = useGraphData()
  const nearbyNodeIds = useDataStore((s) => s.nearbyNodeIds)
  const selectedNode = useSelectedNode()

  const instances = useMemo(
    () =>
      data.nodes.map((node, i) => {
        const isSelectedNode = node?.ref_id === selectedNode?.ref_id
        const visible = !nearbyNodeIds.includes(node.ref_id || '') && !isMainTopic(node) && !isSelectedNode

        return (
          <Instance
            // eslint-disable-next-line react/no-array-index-key
            key={`${node.ref_id || node.id}-instanced-node-${i}`}
            color={node.node_type === 'guest' ? 'orange' : 'lightgray'}
            name={node.id}
            position={[node.x, node.y, node.z]}
            scale={visible ? (node.scale || 1) * 0.8 : 0}
            userData={node}
            visible={visible}
          />
        )
      }),
    [nearbyNodeIds, data.nodes, selectedNode],
  )

  useEffect(() => {
    if (selectedNode) {
      blurryMaterial.opacity = 0.4
    } else {
      blurryMaterial.opacity = 0.9
    }
  }, [selectedNode])

  return (
    <Instances geometry={boxGeometry} material={blurryMaterial} visible={!hide}>
      {instances}
    </Instances>
  )
}