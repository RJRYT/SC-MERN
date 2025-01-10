import dummy from '../../assets/images/dummyimage.jpeg';
import { SlCalender } from 'react-icons/sl';
import { FaEyeSlash, FaRegEye, FaCircleArrowRight } from 'react-icons/fa6';
import { Textarea, Input } from '@material-tailwind/react';
import { IoMdPhotos } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from '@material-tailwind/react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const RequestService = () => {
  const [date, setDate] = useState(new Date());
  const [value, onChange] = useState('10:00');
  return (
    <>
      <div className="bg-black text-white h-20 flex items-center"></div>
      <div className="bg-[#d9d9db] flex 2xl:h-[130vh] h-[150vh]">
        <div className=" w-11/12 max-w-md  mx-auto flex flex-col gap-5 mt-10">
          <div className="flex gap-10 items-center">
            <div className="w-16">
              <img src={dummy} className="rounded-full"></img>
            </div>

            <div>
              <h4>Nazarual islam</h4>
              <p className="mt-2"> Electrification</p>
            </div>
          </div>
          <div>
            <Textarea className="bg-white" placeholder="Title"></Textarea>
          </div>
          <div>
            <Textarea
              rows={8}
              className="bg-white "
              placeholder="Description"
            ></Textarea>
          </div>
          <div>
            <Input
              type="file"
              placeholder="images"
              className="h-20 bg-white"
            ></Input>
          </div>
          <div className="flex text-6xl items-center gap-3">
            <IoMdPhotos />
            <IoMdPhotos />
            <IoMdPhotos />
            <FaPlus className="text-2xl font-thin" />
          </div>
          <div className="flex items-center gap-2">
            <span>Availability</span>
            <FaEdit />
          </div>
          <div className="flex flex-col gap-2">
            <span>From</span>
            <div className="flex items-center gap-10">
              <div className="bg-white h-14 rounded-lg relative flex items-center">
                <Popover placement="bottom">
                  <PopoverHandler>
                    <Input
                      className="border-none"
                      label="Select a Date"
                      onChange={() => null}
                      value={date ? format(date, 'PPP') : ''}
                    />
                  </PopoverHandler>
                  <PopoverContent>
                    <DayPicker
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      showOutsideDays
                      className="border-0"
                      classNames={{
                        caption:
                          'flex justify-center py-2 mb-4 relative items-center',
                        caption_label: 'text-sm font-medium text-gray-900',
                        nav: 'flex items-center',
                        nav_button:
                          'h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300',
                        nav_button_previous: 'absolute left-1.5',
                        nav_button_next: 'absolute right-1.5',
                        table: 'w-full border-collapse',
                        head_row: 'flex font-medium text-gray-900',
                        head_cell: 'm-0.5 w-9 font-normal text-sm',
                        row: 'flex w-full mt-2',
                        cell: 'text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                        day: 'h-9 w-9 p-0 font-normal',
                        day_range_end: 'day-range-end',
                        day_selected:
                          'rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white',
                        day_today: 'rounded-md bg-gray-200 text-gray-900',
                        day_outside:
                          'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10',
                        day_disabled: 'text-gray-500 opacity-50',
                        day_hidden: 'invisible',
                      }}
                      components={{
                        IconLeft: ({ ...props }) => (
                          <ChevronLeftIcon
                            {...props}
                            className="h-4 w-4 stroke-2"
                          />
                        ),
                        IconRight: ({ ...props }) => (
                          <ChevronRightIcon
                            {...props}
                            className="h-4 w-4 stroke-2"
                          />
                        ),
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <SlCalender className="absolute right-4" />
              </div>
              <div>
                <input
                  type="time"
                  value={value}
                  className="h-14 w-52 rounded-lg pl-5 pr-5"
                ></input>
              </div>
            </div>
            <span>To</span>
            <div className="flex items-center gap-10">
              <div className="bg-white h-14 rounded-lg relative flex items-center">
                <Popover placement="bottom">
                  <PopoverHandler>
                    <Input
                      className="border-none"
                      label="Select a Date"
                      onChange={() => null}
                      value={date ? format(date, 'PPP') : ''}
                    />
                  </PopoverHandler>
                  <PopoverContent>
                    <DayPicker
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      showOutsideDays
                      className="border-0"
                      classNames={{
                        caption:
                          'flex justify-center py-2 mb-4 relative items-center',
                        caption_label: 'text-sm font-medium text-gray-900',
                        nav: 'flex items-center',
                        nav_button:
                          'h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300',
                        nav_button_previous: 'absolute left-1.5',
                        nav_button_next: 'absolute right-1.5',
                        table: 'w-full border-collapse',
                        head_row: 'flex font-medium text-gray-900',
                        head_cell: 'm-0.5 w-9 font-normal text-sm',
                        row: 'flex w-full mt-2',
                        cell: 'text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                        day: 'h-9 w-9 p-0 font-normal',
                        day_range_end: 'day-range-end',
                        day_selected:
                          'rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white',
                        day_today: 'rounded-md bg-gray-200 text-gray-900',
                        day_outside:
                          'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10',
                        day_disabled: 'text-gray-500 opacity-50',
                        day_hidden: 'invisible',
                      }}
                      components={{
                        IconLeft: ({ ...props }) => (
                          <ChevronLeftIcon
                            {...props}
                            className="h-4 w-4 stroke-2"
                          />
                        ),
                        IconRight: ({ ...props }) => (
                          <ChevronRightIcon
                            {...props}
                            className="h-4 w-4 stroke-2"
                          />
                        ),
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <SlCalender className="absolute right-4" />
              </div>
              <div>
                <input
                  type="time"
                  value={value}
                  className="h-14 w-52 rounded-lg pl-5 pr-5"
                ></input>
              </div>
            </div>
          </div>
          <div>
            <button className="w-full rounded-full shadow-lg flex items-center justify-center h-[60px] bg-primary text-white text-xl font-bold relative">
              Conform
              <FaCircleArrowRight className="absolute right-2 text-5xl p-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default RequestService;
