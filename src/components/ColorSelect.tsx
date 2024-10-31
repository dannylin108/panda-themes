import { createSignal, Index } from "solid-js";
import { Dynamic, Portal } from "solid-js/web";
import { Text } from "./ui/text";
import { Select } from "./ui/select";

import IconCheck from '~icons/tabler/check';
import IconChevronDown from '~icons/tabler/chevron-down';
import NotoDeciduousTree from '~icons/noto/deciduous-tree';
import NotoFire from '~icons/noto/fire';
import NotoMountain from '~icons/noto/mountain';
import NotoWaterWave from '~icons/noto/water-wave';
import NotoPick from '~icons/noto/pick';
import { css } from "styled-system/css";
import { createListCollection } from "@ark-ui/solid";


const wuXingEmoji = [
    NotoDeciduousTree,
    NotoFire,
    NotoMountain,
    NotoWaterWave,
    NotoPick
];

const inlineIcon = css({
    display: 'inline-block',
    verticalAlign: '-0.125em',
    width: '1em',
    height: '1em',
});


const wuXingHanZi = [['木', 'Дерево'], ['火', 'Огонь'], ['土', 'Земля'], ['金', 'Металл'], ['水', 'Вода']];

const items = wuXingHanZi.map((hanzi, i) => ({
    label: hanzi[1],
    value: i.toString(),
    icon: wuXingEmoji[i]
}));

const ColorSelect = () => {

    const [value, setValue] = createSignal<number>(0);

    const collection = createListCollection({ items });

    return <Select.Root size='sm'
        defaultValue={[items[0].value]}
        onValueChange={(value) => setValue(Number(value.value[0]))}
        collection={collection}
    >
        <Select.Label>Палитра</Select.Label>
        <Select.Control mt='0.5' minW='200px'>
            <Select.Trigger>
                <span>
                    <Dynamic class={inlineIcon} component={wuXingEmoji[value()]} />&emsp;
                    <Select.ValueText />
                </span>
                <Select.Indicator>
                    <IconChevronDown />
                </Select.Indicator>
            </Select.Trigger>
        </Select.Control>
        <Portal>
            <Select.Positioner>
                <Select.Content>
                    <Index each={items}>
                        {(item) => (
                            <Select.Item item={item()} gap={4} >
                                <Select.ItemText>
                                    <Dynamic class={inlineIcon} component={item().icon} />&emsp;{item().label}
                                </Select.ItemText>
                                <Select.ItemIndicator>
                                    <IconCheck />
                                </Select.ItemIndicator>
                            </Select.Item>
                        )}
                    </Index>
                </Select.Content>
            </Select.Positioner>
        </Portal>
    </Select.Root>;
}

export default ColorSelect;