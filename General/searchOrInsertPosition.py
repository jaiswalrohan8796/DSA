def searchInsert(self, nums: List[int], target: int) -> int:
    if (target in nums):
        return nums.index(target)
    pos = 0
    while pos < len(nums):
        if (target < nums[pos]):
            return pos
        pos += 1
    return pos
