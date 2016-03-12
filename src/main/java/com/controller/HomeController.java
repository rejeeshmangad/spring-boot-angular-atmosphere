package com.controller;


import com.repository.ItemRepository;
import com.websocket.ToastService;
import com.google.gson.Gson;
import org.atmosphere.cpr.MetaBroadcaster;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

@Controller
public class HomeController {
  private final MetaBroadcaster broadcaster;
  private final Log log = LogFactory.getLog(getClass());

  @Autowired
  private ItemRepository repo;

  @Autowired
  public HomeController(MetaBroadcaster metaBroadcaster) {
    if (metaBroadcaster == null) {
      throw new NullPointerException("metaBroadcaster must not be null");
    }
    this.broadcaster = metaBroadcaster;
  }

  @RequestMapping(value = "/broadcast/{message}", method = RequestMethod.GET)
  @ResponseStatus(value = HttpStatus.OK)
  public void broadcast(@PathVariable("message") String message) {
	log.info("HomeController::broadcast message ="+message );
    Gson gson = new Gson();
    String data = gson.toJson(repo.findAll());
    broadcaster.broadcastTo(ToastService.PATH, data);
  }

}
