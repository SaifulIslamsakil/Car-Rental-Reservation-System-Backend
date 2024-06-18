export const convartTimeTohours = (time: string): number => {
    const [hours, minuts] = time.split(":")
    return Number(hours) + Number(minuts) / 60
}