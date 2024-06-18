import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
export default function ReadDatePickers({ date }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                    'DatePicker',
                ]}
            >
                <DemoItem label="">
                    <DesktopDatePicker
                        defaultValue={dayjs(date)}
                        readOnly
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}
