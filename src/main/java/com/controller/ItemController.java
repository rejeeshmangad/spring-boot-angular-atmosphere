package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model.Item;
import com.repository.ItemRepository;

@RestController
@RequestMapping("/items")
public class ItemController {
  @Autowired
  private ItemRepository repo;
  
  @RequestMapping(method = RequestMethod.GET)
  public List<Item> findItems() {
   // return repo.findAll();
	  return (List<Item>) repo.findAll();
  }
  
  @RequestMapping(method = RequestMethod.POST)
  public Item addItem1(@RequestBody Item item) {
	System.out.println("Add item called");  
    item.setId(null);
    //return repo.saveAndFlush(item);
    return repo.save(item);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public Item updateItem(@RequestBody Item updatedItem, @PathVariable Integer id) {
    updatedItem.setId(id);
    //return repo.saveAndFlush(updatedItem);
    return repo.save(updatedItem);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteItem(@PathVariable Integer id) {
    repo.delete(id);
  }
}
